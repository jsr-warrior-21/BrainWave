export default async function PortfolioCategory({params}:{params:Promise<{category:string}>}){
    const {category} = await params;
    return (
        <div>
            PortfolioCategory {category}
        </div>
    )
}