// src/lib/dateUtils.js
"use client";

export function formatExperienceDateRange(startDateStr, endDateStr) {
    const start = new Date(startDateStr);
    const end = (endDateStr === "Present" || !endDateStr) ? new Date() : new Date(endDateStr);

    if (isNaN(start.getTime())) return "Invalid start date";
    if (endDateStr !== "Present" && endDateStr && isNaN(end.getTime())) return "Invalid end date";

    const options = { year: 'numeric', month: 'short' };
    const startDateFormatted = start.toLocaleDateString('en-US', options);
    const endDateFormatted = (endDateStr === "Present" || !endDateStr)
        ? "Present"
        : end.toLocaleDateString('en-US', options);

    // Calculate duration
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    // If the end date's day is before the start date's day,
    // and we are not in the exact same month and year (for 'Present' case primarily)
    // or if it's a fixed end date.
    // Added a grace period of 5 days: if it's within 5 days of a full month, count it.
    if (end.getDate() < start.getDate() && (start.getDate() - end.getDate() >= 5)) {
        if (!(start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth())) {
            months--;
        }
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // If years and months are both zero (e.g. started this month and it's "Present")
    // and less than a month has passed based on days.
    if (years === 0 && months === 0) {
        const dayDiff = Math.floor((end - start) / (1000 * 60 * 60 * 24));
        if (dayDiff < 28) { // Arbitrary threshold for "Less than a month"
            return `${startDateFormatted} – ${endDateFormatted} (Recent Start)`;
        }
        // If it's exactly 0 months (e.g. started 1st of month, current date is 1st of same month)
        // but if it crosses a month boundary but is still < 1 full month, it might show 0 months.
        // So if years is 0, ensure at least 1 month is shown if months was calculated as 0 but it's not the same month.
        if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
            // Still within the same month, might be very recent
        } else if (years === 0 && months === 0) {
            months = 1; // Default to 1 month if it spans across month boundary but diff is <1
        }
    }


    let durationStr = "";
    if (years > 0) {
        durationStr += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
        if (durationStr.length > 0) durationStr += " ";
        durationStr += `${months} month${months > 1 ? 's' : ''}`;
    }

    if (!durationStr && (endDateStr === "Present" || !endDateStr) && start <= end) {
        durationStr = "Current"; // Or "Less than a month"
    } else if (!durationStr && start > end) {
        durationStr = "Invalid range";
    }


    return `${startDateFormatted} – ${endDateFormatted}${durationStr ? ` (${durationStr})` : ''}`;
}
/**
 * Calculates the summed total experience from an array of individual experiences.
 * Each role's duration is calculated and then summed up.
 * @param {Array} experiencesArray - Array of experience objects, each with startDate and endDate.
 * @returns {Object} An object { totalYears: number, totalMonths: number, display: string }
 */
export function calculateSumOfExperiences(experiencesArray) {
    if (!experiencesArray || experiencesArray.length === 0) {
        return { totalYears: 0, totalMonths: 0, display: "0 months" };
    }

    let totalMonthsSum = 0;
    const now = new Date();

    experiencesArray.forEach(exp => {
        const start = new Date(exp.startDate);
        const end = (exp.endDate === "Present" || !exp.endDate) ? now : new Date(exp.endDate);

        if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
            return; // Skip invalid or future-dated entries for summing
        }

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (end.getDate() < start.getDate() && (start.getDate() - end.getDate() >= 5)) {
            months--;
        }

        totalMonthsSum += (years * 12) + months;
    });

    const finalTotalYears = Math.floor(totalMonthsSum / 12);
    const finalTotalMonths = totalMonthsSum % 12;

    // Construct the display string
    let display = "";
    if (finalTotalYears > 0) {
        display += `${finalTotalYears} year${finalTotalYears > 1 ? 's' : ''}`;
    }
    if (finalTotalMonths > 0) {
        if (display.length > 0) display += " and ";
        display += `${finalTotalMonths} month${finalTotalMonths > 1 ? 's' : ''}`;
    }

    if (display === "") {
        display = totalMonthsSum > 0 ? "Less than a month" : "0 months";
    }

    return { totalYears: finalTotalYears, totalMonths: finalTotalMonths, display };
}


// Your existing calculateTotalCareerExperience (calculates span, not sum) can remain if needed for other purposes
// or be renamed to clarify its function, e.g., calculateCareerSpan.
export function calculateTotalCareerSpan(experiencesArray) {
    // ... (implementation from previous response that calculates earliest start to latest end)
    // For clarity, I'll paste the relevant parts of it here again.
    if (!experiencesArray || experiencesArray.length === 0) {
        return { years: 0, months: 0, display: "0 months" };
    }
    let earliestOverallStartDate = null;
    let latestOverallEndDate = null;
    const now = new Date();
    experiencesArray.forEach(exp => {
        const start = new Date(exp.startDate);
        if (!isNaN(start.getTime())) {
            if (earliestOverallStartDate === null || start < earliestOverallStartDate) {
                earliestOverallStartDate = start;
            }
        }
        let currentRoleEndDate = (exp.endDate === "Present" || !exp.endDate) ? now : new Date(exp.endDate);
        if (!isNaN(currentRoleEndDate.getTime())) {
            if (latestOverallEndDate === null || currentRoleEndDate > latestOverallEndDate) {
                latestOverallEndDate = currentRoleEndDate;
            }
        }
    });

    if (!earliestOverallStartDate || !latestOverallEndDate || earliestOverallStartDate > latestOverallEndDate) {
        return { years: 0, months: 0, display: "N/A" };
    }
    let years = latestOverallEndDate.getFullYear() - earliestOverallStartDate.getFullYear();
    let months = latestOverallEndDate.getMonth() - earliestOverallStartDate.getMonth();
    if (latestOverallEndDate.getDate() < earliestOverallStartDate.getDate() && (earliestOverallStartDate.getDate() - latestOverallEndDate.getDate() >= 5)) {
        months--;
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    // Formatting (same as formatDuration)
    let display = "";
    if (years > 0) display += `${years} year${years > 1 ? 's' : ''}`;
    if (months > 0) {
        if (display.length > 0) display += " and ";
        display += `${months} month${months > 1 ? 's' : ''}`;
    }
    if (display === "") {
        const totalDays = Math.floor((latestOverallEndDate.getTime() - earliestOverallStartDate.getTime()) / (1000 * 60 * 60 * 24));
        display = (totalDays >= 0 && totalDays < 30) ? "Less than a month" : "Just starting";
    }
    return { years, months, display };
}


// Your existing formatDuration function
export function formatDuration(years, months) {
    if (years === 0 && months === 0) {
        return "Less than a month";
    }
    const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
    return [yearStr, monthStr].filter(Boolean).join(' and ');
}