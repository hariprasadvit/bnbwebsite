import Image from "next/image";
import "./FullPageLoader.scss";
import LoaderGif from "../../../../public/Home/loader.gif";

export default function FullPageLoader() {
  return (
    <div className="full-page-loader">
      <Image src={LoaderGif} alt="loader" width={0} height={0} />
    </div>
  );
}
