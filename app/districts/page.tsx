import Layout from "@/components/layout";
import { fetchDistricts } from "@/lib/ttr-api";

export default async function Page() {
    const districts = await fetchDistricts();
    if (districts.length === 0) {
        return (
            <Layout>
                <div className="container py-12 md:py-24">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none text-center">Districts</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            There was an error loading the districts. Please try again later.
                        </p>
                    </div>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            <div className="container py-12 md:py-24">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none text-center">Districts</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {districts.map(district => (
                            <div key={district.name} className="bg-white rounded-lg shadow overflow-hidden dark:bg-gray-950">
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{district.name}</h3>
                                </div>
                                <div className="border-t border-gray-200 p-4 text-sm dark:border-gray-800">
                                    <p>Population: {district.population}</p>
                                    <p>Status: {district.status}</p>
                                    { district.invasion && (
                                        <p>Invasion: {district.invasion.type} ({district.invasion.progress})</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}