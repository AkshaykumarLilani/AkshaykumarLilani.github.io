'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from "sonner"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const RESUME_FILE_NAME = "Akshaykumar_Lilani_Resume";
const RESUME_FILE_EXTENSION = "pdf";

export default function DownloadPage() {
    const router = useRouter();
    const [downloadStatus, setDownloadStatus] = useState('loading'); // 'loading', 'success', 'error'

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
            link.click();
            window.URL.revokeObjectURL(url);
            setDownloadStatus('success');
        } catch (error) {
            console.error('Error downloading the file:', error);
            toast.error("Error downloading the file", {
                description: `${error}`
            });
            setDownloadStatus('error');
        }
    };

    useEffect(() => {
        initiateDownload();
    }, []);

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center min-h-screen px-4',
                'bg-background text-foreground'
            )}
        >
            
            <h1 className="text-4xl font-bold mb-8">{`Akshaykumar Lilani's Resume`}</h1>

            {downloadStatus === 'loading' && (
                <>
                    <h2 className="text-3xl font-bold mb-4">Downloading Resume...</h2>
                    <p className="text-lg">If the download does not start automatically, please wait.</p>
                </>
            )}

            {downloadStatus === 'success' && (
                <>
                    <h2 className="text-3xl font-bold mb-4">Download Complete!</h2>
                    <p className="text-lg">The resume has been downloaded.</p>
                    <div className="flex gap-4 mt-4">
                        <Button
                            variant="outline"
                            className="hover:bg-muted/50"
                            onClick={() => window.open(`/${RESUME_FILE_NAME}.${RESUME_FILE_EXTENSION}`, '_blank')}
                        >
                            View Resume
                        </Button>
                        <Button
                            variant="outline"
                            className="hover:bg-muted/50"
                            onClick={() => router.push("/")}
                        >
                            Go to Main Page
                        </Button>
                    </div>
                </>
            )}

            {downloadStatus === 'error' && (
                <>
                    <h2 className="text-3xl font-bold mb-4">Download Failed!</h2>
                    <p className="text-lg">There was an error downloading your resume.</p>
                    <div className="flex gap-4 mt-4">
                        <Button
                            variant="outline"
                            className="hover:bg-muted/50"
                            onClick={initiateDownload}
                        >
                            Try Again
                        </Button>
                        <Button
                            variant="outline"
                            className="hover:bg-muted/50"
                            onClick={() => router.push("/")}
                        >
                            Go to Main Page
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
