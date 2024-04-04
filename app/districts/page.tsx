import Layout from "@/components/layout";

export default function Page() {
    return (
        <Layout>
            <div className="container py-12 md:py-24">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none">Districts</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        This page is still in development. Please check back later.
                    </p>
                </div>
            </div>
        </Layout>
    );
}