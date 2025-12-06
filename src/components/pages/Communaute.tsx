import { MotionWrapper } from "../layouts/MotionWrapper";
import { BookOpen, Check, Droplet, Laugh, MessagesSquare } from "lucide-react";
import { Button } from "../ui/Button";
import { ColorMap, followers } from "@/constants/followers";
import { cn } from "@/lib/utils";

export default function Communaute() {
  return (
    <MotionWrapper ariaLabel="communauté">
      <div className="grid lg:grid-cols-[65%_auto] gap-5">
        <div>
          <h1 className="text-3xl font-extrabold tracking-normal text-gray-800 mb-4">
            Communaut&eacute;
          </h1>
          <section className="bg-gray-50 shadow-sm rounded-xl p-5 max-md:p-3 space-y-7">
            <div className="flex gap-4 max-md:gap-2.5">
              <img
                src="/uploads/avatar/default2.jpg"
                alt="default avatar"
                className="rounded-full w-9 h-9 object-cover shrink-0"
              />
              <div className="space-y-3.5">
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm max-md:mb-1.5">
                    <span className="font-semibold">L&eacute;a</span> a
                    compl&eacute;t&eacute; son habitude
                    <span className="bg-blue-100 text-blue-500 px-2 py-0.5 rounded-full text-xs mx-1 inline-flex items-center gap-0.5 md:gap-1">
                      <BookOpen size={12} /> Lecture
                    </span>
                    aujourd&apos;hui
                  </p>
                  <span className="text-xs text-gray-500">
                    il y a 2 minutes
                  </span>
                </div>
                <button className="flex items-center gap-1 md:gap-1 text-blue-500 bg-blue-100 py-1 px-3 rounded-full cursor-pointer focus:ring-4 focus:ring-blue-600 transition duration-300 focus:outline-2 outline-gray-50 text-sm">
                  <Laugh
                    size={14}
                    className="-translate-y-0.5 md:-translate-y-px mr-px"
                  />{" "}
                  Bravo!
                </button>
              </div>
            </div>
            <hr className="text-gray-200 rounded-full" />
            <div className="flex gap-4 max-md:gap-2.5">
              <img
                src="/uploads/avatar/default3.jpg"
                alt="default avatar"
                className="rounded-full w-9 h-9 object-cover shrink-0"
              />
              <div className="space-y-3.5">
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm max-md:mb-1.5">
                    <span className="font-semibold">Marc</span> a atteint 7
                    jours cons&eacute;cutifs pour son habitude
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs mx-1 inline-flex items-center gap-0.5 md:gap-1">
                      <Droplet
                        fill="#8A8AFF"
                        stroke="none"
                        strokeWidth={0}
                        className="-translate-y-0.5"
                        size={12}
                      />{" "}
                      Boire 2L d&apos;eau
                    </span>
                    .
                  </p>
                  <span className="text-xs text-gray-500">il y a 1 heure</span>
                </div>
                <button
                  className="flex items-center gap-0.5 md:gap-1 py-1 px-3 rounded-full cursor-not-allowed bg-gray-300 text-sm"
                  disabled
                >
                  <Check
                    size={14}
                    className="-translate-y-0.5 md:-translate-y-px mr-px"
                  />{" "}
                  Bravo envoy&eacute;!
                </button>
              </div>
            </div>
            <hr className="text-gray-200 rounded-full" />
            <section className="flex flex-col items-center text-center space-y-1.5 py-6">
              <MessagesSquare
                size={45}
                strokeWidth={1.5}
                className="text-gray-500 mb-6"
              />
              <h2 className="text-gray-800 font-semibold">
                C&apos;est un peu calme par ici...
              </h2>
              <p className="text-gray-500 max-w-lg text-sm mb-5">
                Commencez &agrave; suivre vos habitudes et vos progr&egrave;s
                appara&icirc;tront ici pour que la communauté puisse les voir.
              </p>
              <Button
                label="Commencer une nouvelle habitude"
                className="max-md:w-full md:py-1.5 md:px-5"
              />
            </section>
          </section>
        </div>
        <section className="bg-gray-50 shadow-sm rounded-xl p-5 space-y-7 max-h-fit">
          <h2 className="text-xl font-semibold tracking-normal text-gray-800 mb-4">
            Habitudes populaires
          </h2>
          {followers.map(({ name, Icon, background, members }) => (
            <div
              key={name}
              className="flex items-center justify-between gap-2.5"
            >
              <section className="inline-flex items-center gap-2">
                <div
                  className={cn(
                    "rounded-full h-10 w-10 flex items-center justify-center",
                    ColorMap[background]
                  )}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-lg text-gray-800 line-clamp-1">{name}</h3>
              </section>
              <p className="text-sm text-gray-500 font-light shrink-0">
                {members} membres
              </p>
            </div>
          ))}
        </section>
      </div>
    </MotionWrapper>
  );
}
