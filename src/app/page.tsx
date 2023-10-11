import { Seo } from "./ui/components/seo";
import { Typography } from "./ui/design-system/typography/typography";


export default function Home() {
  return (
  <>
    <Seo title="My web site" description="desc..."/>
    <div className="bg-red-500">
      <p className="mt-5 bg-red-500">jhecjwjhnec</p>
    </div>
    <Typography variant="display" component="h1">   
      Abouba
    </Typography>
  </>
  )
}
