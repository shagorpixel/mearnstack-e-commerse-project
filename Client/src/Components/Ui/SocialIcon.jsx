

const SocialIcon = ({url,icon}) => {
  return (
    <a
      className="size-10 inline-flex justify-center items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none "
      href={url} target="blank"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
