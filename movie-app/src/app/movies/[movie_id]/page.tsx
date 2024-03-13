import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IMovie } from "@/utils/types/movies";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie = await getDetailMovie(params.movie_id);

  return {
    title: `${movie.title} (${dayjs(movie.release_date).format(
      "YYYY"
    )}) - CineVerse`,
  };
}

async function getDetailMovie(movie_id: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?append_to_response=videos%2Creviews%2Ccredits%2Csimilar&language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTY3ZDAyNWNhMGI3NzE2NTcwOTg0MTcwOTY5ZTg4ZiIsInN1YiI6IjYyY2UzMDFjNGRjMzRhMDA0ZTM5NDMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GFxoj8wdfWn0QHVYxVfcn47_4-QJ2BjC2bQ7U0wR-BI",
        },
      }
    );
    const result = await response.json();

    return result as IMovie;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

interface Props {
  params: { movie_id: string };
}

export default async function Page({ params }: Props) {
  const movie = await getDetailMovie(params.movie_id);

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-3xl tracking-widest">{movie.title}</p>
          <p className="text-sm tracking-wider">
            {dayjs(movie.release_date).format("YYYY")} | {movie.runtime} minutes
            | {movie.vote_average.toFixed(1)} ★ ({movie.vote_count})
          </p>
          <div className="flex gap-3">
            {movie.genres.map((genre) => (
              <Link
                className={badgeVariants({ variant: "outline" })}
                key={genre.id}
                href={`/movies?with_genres=${genre.id}`}
              >
                {genre.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-3 md:flex-row md:items-start">
        <div className="flex flex-col w-full md:w-1/3 lg:w-1/5 items-center gap-3">
          <Image
            className="object-contain"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://placehold.co/500x750?text=No+Image"
            }
            alt={movie.title}
            width={500}
            height={750}
            priority
          />
          <Button>Add to watchlist</Button>
          <Button>Add to Favorite</Button>
        </div>
        <div className="flex flex-col w-full md:w-2/3 lg:w-4/5">
          <ul className="[&>*]:flex [&>*]:gap-3 [&_span]:font-bold flex flex-col gap-3">
            <li>
              <span>Overview</span>
              <p>{movie.overview}</p>
            </li>
            <li>
              <span>Release Date</span>
              <p>{dayjs(movie.release_date).format("DD MMMM YYYY")}</p>
            </li>
            <li>
              <span>Directing</span>
              <Link
                className={badgeVariants({ variant: "outline" })}
                href={"/"}
              >
                {
                  movie.credits?.crew.find(
                    (crew) => crew.department === "Directing"
                  )?.name
                }
              </Link>
            </li>
            <li>
              <span>Budget</span>
              <p>
                {movie.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>
            <li>
              <span>Revenue</span>
              <p>
                {parseInt(movie.revenue).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
