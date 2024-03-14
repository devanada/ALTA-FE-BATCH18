import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

import { CarouselItem } from "@/components/ui/carousel";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/movie-card";
import Carousel from "@/components/carousel";
import Heading from "@/components/heading";

import { getDetailMovie } from "@/utils/actions/movies";

interface Props {
  params: { movie_id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detail = await getDetailMovie(params.movie_id);

  return {
    title: `${detail.title} (${dayjs(detail.release_date).format(
      "YYYY"
    )}) - CineVerse`,
  };
}

export default async function Page({ params }: Props) {
  const detail = await getDetailMovie(params.movie_id);

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-3xl tracking-widest">{detail.title}</p>
          <p className="text-sm tracking-wider">
            {dayjs(detail.release_date).format("YYYY")} | {detail.runtime}{" "}
            minutes | {detail.vote_average.toFixed(1)} ★ ({detail.vote_count})
          </p>
          <div className="flex gap-3">
            {detail.genres.map((genre) => (
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
              detail.poster_path
                ? `https://image.tmdb.org/t/p/w500/${detail.poster_path}`
                : "/movie_placeholder.png"
            }
            alt={detail.title}
            width={250}
            height={500}
            priority
          />
          <Button>Add to watchlist</Button>
          <Button>Add to favorite</Button>
        </div>
        <div className="flex flex-col w-full md:w-2/3 lg:w-4/5">
          <ul className="[&>*]:flex [&>*]:gap-3 [&_span]:font-bold flex flex-col gap-3">
            <li>
              <span>Overview</span>
              <p>{detail.overview}</p>
            </li>
            <li>
              <span>Release Date</span>
              <p>{dayjs(detail.release_date).format("DD MMMM YYYY")}</p>
            </li>
            <li>
              <span>Directing</span>
              <Link
                className={badgeVariants({ variant: "outline" })}
                href={`/movies?with_crew=${
                  detail.credits?.crew.find(
                    (crew) => crew.department === "Directing"
                  )?.id
                }`}
              >
                {
                  detail.credits?.crew.find(
                    (crew) => crew.department === "Directing"
                  )?.name
                }
              </Link>
            </li>
            <li>
              <span>Budget</span>
              <p>
                {detail.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>
            <li>
              <span>Revenue</span>
              <p>
                {parseInt(detail.revenue).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>
            <li>
              <span>Stars</span>
              <div className="flex flex-wrap gap-3">
                {detail.credits?.cast.slice(0, 3).map((cast) => (
                  <Link
                    className={badgeVariants({ variant: "outline" })}
                    key={cast.id}
                    href={`/movies?with_cast=${cast.id}`}
                  >
                    {cast.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Heading title="Videos" />
      <Carousel>
        {detail.videos?.results.map((movie) => (
          <CarouselItem key={movie.id}>
            <iframe
              key={movie.id}
              className="h-full w-full aspect-video"
              src={`https://www.youtube.com/embed/${movie.key}`}
              title={movie.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </CarouselItem>
        ))}
      </Carousel>
      <Heading title="More Like This" />
      <Carousel>
        {detail.similar?.results.map((movie) => (
          <CarouselItem
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={movie.id}
          >
            <MovieCard {...movie} />
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
}
