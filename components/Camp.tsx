interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Camp = () => {
  const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
    return <h1>camvk</h1>;
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"></div>
      <CampSite
        backgroundImage="bg-bg-img-1"
        title="Putuk Truno Camp"
        subtitle="Prigen"
        peopleJoined="50+ Joined"
      />
    </section>
  );
};

export default Camp;
