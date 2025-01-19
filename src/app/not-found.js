'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
    const { theme } = useTheme();
    const router = useRouter();

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center min-h-screen px-4',
                theme === 'dark' ? 'bg-background text-foreground' : 'bg-background text-foreground'
            )}
        >
            <h1 className="text-6xl font-extrabold mb-4">404</h1>
            <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
            <Button
                variant="outline"
                className="hover:bg-muted/50"
                onClick={() => router.push("/")}
            >
                Go to Main Page
            </Button>
        </div>
    );
}
