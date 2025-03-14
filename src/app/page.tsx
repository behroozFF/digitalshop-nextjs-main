import Banner from '@/components/ui/banner';
import Welcome from '@/components/welcome';
import Test from './test/page';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <Test />
      <Banner />
      <Welcome />
    </div>
  );
}
