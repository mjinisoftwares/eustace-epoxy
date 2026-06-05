export default function MapComponent() {
    return (
        <section className="py-16 md:py-32 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="mb-12 text-center">
                    <h2 className="text-balance text-4xl font-semibold text-primary lg:text-5xl">Our Location</h2>
                    <p className="mt-4 text-muted-foreground">Contact us for consultations and site visits.</p>
                </div>
                
                <div className="relative h-[450px] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-primary/10">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4150.672951511856!2d36.95776027333833!3d-1.4745125510005794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f9f61f0222405%3A0x8b9d26c46751db1c!2sEustace%20epoxy%20limited!5e0!3m2!1sen!2ske!4v1778282773496!5m2!1sen!2ske" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        title="Eustace Epoxy Limited Location"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
