import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams)?.query;
  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      _id: 1,
      description: "This is a description",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fbusiness-people-launching-new-startup-project-vector-21386653&psig=AOvVaw2lw448Ro9riWqyvqAM834G&ust=1732900658528000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCo3JPE_4kDFQAAAAAdAAAAABAJ",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pich Your StartUp <br /> Connect with Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, adn get noticed in Virtual Competitons
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}" ` : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((posts: StartUpCardType, index: number) => (
              <StartUpCard />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
