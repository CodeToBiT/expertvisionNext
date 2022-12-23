import Link from "next/link";

export const ViewButton = (props) => {
  return (
    <>
      <Link href="#" className="btn btn-secondary py-2 px-5 br-0 text-white">
        {props.name}
      </Link>
    </>
  );
};
