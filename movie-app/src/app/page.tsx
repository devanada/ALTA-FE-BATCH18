import { CarouselItem } from "@/components/ui/carousel";
import Carousel from "@/components/carousel";
import Heading from "@/components/heading";

import { IResponse } from "@/utils/types/api";
import { IMovie } from "@/utils/types/movies";
import MovieCard from "@/components/movie-card";

async function getPopularMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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

    return result as IResponse<IMovie[]>;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const popular = await getPopularMovies();

  return (
    <>
      <Heading title="Popular Movie" />
      <Carousel>
        {popular.results.map((movie) => (
          <CarouselItem
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={movie.id}
          >
            <MovieCard
              id={movie.id}
              overview={movie.overview}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
}
