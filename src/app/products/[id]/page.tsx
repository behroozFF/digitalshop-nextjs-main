import React from 'react';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;

  console.log(data);
  return <div>{data.id}</div>;
}

export default page;
