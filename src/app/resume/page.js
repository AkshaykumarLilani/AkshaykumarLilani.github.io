'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from "sonner"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Download, ExternalLink, House, Loader2 } from 'lucide-react';
import { trackLogRocketEvent } from '@/lib/analytics';

const RESUME_FILE_NAME = "Akshaykumar_Lilani_Resume";
const RESUME_FILE_EXTENSION = "pdf";

export default function ResumePage() {
    const router = useRouter();
    const [downloadStatus, setDownloadStatus] = useState(null); // null, 'loading', 'success', 'error'

    useEffect(() => {
        trackLogRocketEvent('Resume Page View');
    }, []);

    const initiateDownload = async () => {
        setDownloadStatus('loading');
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
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            setDownloadStatus('success');
            toast.success("Resume downloaded successfully!");
        } catch (error) {
            console.error('Error downloading the file:', error);
            toast.error("Error downloading the file", {
                description: `${error}`
            });
            setDownloadStatus('error');
        }
    };

    return (
        <div
            className={cn(
                'flex flex-col gap-4 items-center justify-center h-screen px-4 py-4 overflow-x-hidden',
                'bg-background text-foreground'
            )}
        >
            <h1 className="text-3xl md:text-4xl font-bold text-center">{`Akshaykumar Lilani's Resume`}</h1>

            <div className='w-full flex flex-col-reverse md:flex-col gap-4'>
                <div className="flex flex-row items-center justify-center flex-wrap gap-4">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="hover:bg-muted/50 w-auto"
                        onClick={() => window.open(`/${RESUME_FILE_NAME}.${RESUME_FILE_EXTENSION}`, '_blank')}
                    >
                        <ExternalLink /> View in New Tab
                    </Button>
                    <Button
                        variant="secondary"
                        className="hover:bg-muted/50 w-auto"
                        onClick={initiateDownload}
                        disabled={downloadStatus === 'loading'}
                    >
                        {downloadStatus === 'loading' ? <> <Loader2 className='animate-spin' /> Downloading...</> : <> <Download /> Download Resume</>}
                    </Button>
                    <Button
                        variant="secondary"
                        className="hover:bg-muted/50 w-auto"
                        onClick={() => router.push("/")}
                    >
                        <House /> Go to Main Page
                    </Button>
                </div>

                <div className='flex-1 flex items-center justify-center'>
                    {downloadStatus === 'error' && (
                        <div className="text-destructive mb-4">
                            <p>There was an error downloading your resume. Please try again.</p>
                        </div>
                    )}

                    <div className="w-full max-w-4xl h-[55vh] md:h-[calc(100vh-200px)]">
                        <iframe
                            src={`/${RESUME_FILE_NAME}.${RESUME_FILE_EXTENSION}`}
                            className="w-full h-full border rounded-lg"
                            title="Akshaykumar Lilani's Resume"
                        >
                            {`This browser does not support PDFs. Please download the PDF to view it.`}
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
