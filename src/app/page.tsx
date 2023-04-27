import { IRepository } from "./types";

export default function BrowseFeed() {
  return (
    <div className="bg-slate-900 flex flex-wrap gap-8 h-screen p-8">
      {repositories.map((repository: IRepository) => {
        return (
          <RepoCard repository={repository} key={repository.repositoryName} />
        );
      })}
    </div>
  );
}

interface IRepoCardProps {
  repository: IRepository;
}

function RepoCard({ repository }: IRepoCardProps) {
  return (
    <div className="h-96 w-96 bg-slate-600 rounded-2xl flex flex-col justify-between items-start p-8 hover:bg-slate-500">
      {/* NAME */}
      <div>
        <div className="text-xl font-bold">{repository.repositoryName}</div>
      </div>

      {/* #STARS */}
      <div className="flex flex-row space-x-2">
        {/* ICON */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="">{repository.repositoryStars}</div>
      </div>

      {/* #CONTRIBUTORS */}
      <div className="flex flex-row space-x-2">
        {/* ICON */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
              clipRule="evenodd"
            />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
          </svg>
        </div>
        <div className="">{repository.repositoryContributors}</div>
      </div>

      {/* #ISSUES */}
      <div className="flex flex-row space-x-2">
        {/* ICON */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="">{repository.repositoryIssues}</div>
      </div>
    </div>
  );
}

// MOCKDATA - Remove as soon as we have the actual data from the GitHub-trending API
const repositories: IRepository[] = [
  {
    repositoryName: "exampleRepo1",
    repositoryStars: 500,
    repositoryContributors: 50,
    repositoryIssues: 10,
  },
  {
    repositoryName: "exampleRepo2",
    repositoryStars: 250,
    repositoryContributors: 30,
    repositoryIssues: 20,
  },
  {
    repositoryName: "exampleRepo3",
    repositoryStars: 750,
    repositoryContributors: 80,
    repositoryIssues: 15,
  },
  {
    repositoryName: "exampleRepo4",
    repositoryStars: 150,
    repositoryContributors: 20,
    repositoryIssues: 25,
  },
  {
    repositoryName: "exampleRepo5",
    repositoryStars: 100,
    repositoryContributors: 12,
    repositoryIssues: 5,
  },
  {
    repositoryName: "exampleRepo6",
    repositoryStars: 600,
    repositoryContributors: 45,
    repositoryIssues: 30,
  },
  {
    repositoryName: "exampleRepo7",
    repositoryStars: 400,
    repositoryContributors: 35,
    repositoryIssues: 40,
  },
  {
    repositoryName: "exampleRepo8",
    repositoryStars: 900,
    repositoryContributors: 100,
    repositoryIssues: 10,
  },
  {
    repositoryName: "exampleRepo9",
    repositoryStars: 300,
    repositoryContributors: 25,
    repositoryIssues: 20,
  },
  {
    repositoryName: "exampleRepo10",
    repositoryStars: 800,
    repositoryContributors: 90,
    repositoryIssues: 15,
  },
  {
    repositoryName: "exampleRepo11",
    repositoryStars: 450,
    repositoryContributors: 60,
    repositoryIssues: 12,
  },
  {
    repositoryName: "exampleRepo12",
    repositoryStars: 550,
    repositoryContributors: 70,
    repositoryIssues: 8,
  },
  {
    repositoryName: "exampleRepo13",
    repositoryStars: 650,
    repositoryContributors: 85,
    repositoryIssues: 18,
  },
  {
    repositoryName: "exampleRepo14",
    repositoryStars: 350,
    repositoryContributors: 40,
    repositoryIssues: 22,
  },
  {
    repositoryName: "exampleRepo15",
    repositoryStars: 950,
    repositoryContributors: 110,
    repositoryIssues: 7,
  },
  {
    repositoryName: "exampleRepo16",
    repositoryStars: 700,
    repositoryContributors: 55,
    repositoryIssues: 11,
  },
  {
    repositoryName: "exampleRepo17",
    repositoryStars: 200,
    repositoryContributors: 22,
    repositoryIssues: 17,
  },
  {
    repositoryName: "exampleRepo18",
    repositoryStars: 850,
    repositoryContributors: 75,
    repositoryIssues: 9,
  },
  {
    repositoryName: "exampleRepo19",
    repositoryStars: 1000,
    repositoryContributors: 120,
    repositoryIssues: 6,
  },
  {
    repositoryName: "exampleRepo20",
    repositoryStars: 50,
    repositoryContributors: 10,
    repositoryIssues: 3,
  },
];
