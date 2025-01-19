'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { toast } from "sonner"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const RESUME_FILE_NAME = "Akshaykumar_Lilani_Resume";
const RESUME_FILE_EXTENSION = "pdf";

export default function DownloadPage() {
    const router = useRouter();


    useEffect(() => {
        const initiateDownload = async () => {
            try {
                const response = await fetch(`/${RESUME_FILE_NAME}.${RESUME_FILE_EXTENSION}`);
                if (!response.ok) {
                    throw new Error('File download failed');
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${RESUME_FILE_NAME}.${RESUME_FILE_EXTENSION}`;
                link.click();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error downloading the file:', error);
                toast.error("Error downloading the file", {
                    description: `${error}`
                });
            }
        };

        initiateDownload();
    }, []);

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center min-h-screen px-4',
                'bg-background text-foreground'
            )}
        >
            <h1 className="text-3xl font-bold mb-4">Downloading Resume...</h1>
            <p className="text-lg">If the download does not start automatically, please refresh the page.</p>
            <Button
                variant="outline"
                className="hover:bg-muted/50 mt-4"
                onClick={() => router.push("/")}
            >
                Go to Main Page
            </Button>
        </div>
    );
}
