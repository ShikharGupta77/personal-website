export default function Header({ number, text }) {
  return (
    <div className="flex flex-row">
      <div className="w-fit">
        <p className="mb-2 mr-2 pl-1 text-2xl text-lighter-primary-color">{number}</p>
        <p className="mt-4 flex flex-col whitespace-nowrap text-xl-responsive font-semibold text-accent-color">{text}</p>
      </div>
      <div className="flex w-full flex-col">
        <div className="h-1/2"></div>
        <hr className="ml-5 mt-6 w-3/12 border-lighter-primary-color" />
      </div>
    </div>
  );
}
