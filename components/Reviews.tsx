

"use client";
import Script from 'next/script';

export default function Reviews() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold text-primary">Our Google Reviews</h2>
                    <p className="mt-4 text-muted-foreground">Check out our Google reviews to see what our customers say about our services.</p>
                </div>

                <div className="mt-12">
                    <Script src="https://elfsightcdn.com/platform.js" async />
                    <div className="elfsight-app-88e1def2-36d8-47c0-9d9a-894bad7fb523" data-elfsight-app-lazy></div>
                </div>
            </div>
        </section>
    )
}   