import Banner from '@/components/ui/banner';
import Welcome from '@/components/Welcome';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <Banner />
      <Welcome />
    </div>
  );
}
