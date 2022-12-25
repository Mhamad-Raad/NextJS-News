import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const { newsId } = router.query;
  console.log(router);
  return (
    <>
      <div>Details</div>
      <div>newsId: {newsId}</div>
    </>
  );
}
