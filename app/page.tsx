import Layout from "@/components/layout";

export default function Home() {
return (
    <Layout>
        <div className="flex items-center min-h-[600px] py-12 md:py-24">
            <div className="container px-4 flex flex-col gap-2 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none">Welcome to Virginia Beach</h1>
                </div>
                <p className="mx-auto max-w-prose text-gray-500 dark:text-gray-400 text-left">
                    Virginia Beach is a fan-made website to display current information about Toontown Rewritten. This website is not affiliated with Toontown Rewritten or The Walt Disney Company. This website is for educational purposes only.
                    This website is still in initial development. If you have any suggestions or feedback, please feel free to reach out through Github issues.
                </p>
            </div>
        </div>
    </Layout>
);
}
