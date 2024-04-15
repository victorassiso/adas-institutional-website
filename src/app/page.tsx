import { Adopt } from './home/adopt'
import { Banner } from './home/banner'

export default function Home() {
  return (
    <div className="flex flex-col gap-48">
      <Banner />
      <Adopt />
    </div>
  )
}
