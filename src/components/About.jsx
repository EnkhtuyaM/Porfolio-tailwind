import { Button } from "./elements";
export const About = () => {
  return (
    <div className="w-[1440px] h-[962px] px-20 py-24 bg-gray-50 m-auto ">
      <div className="flex justify-center mb-12">
        <Button buttName="About me" />
      </div>

      <div className="flex gap-52">
        <div>
          <img src="./about.png" alt="" />
        </div>

        <div className="w-[584px] h-[694px] px-8">
          <h3 className="text-3xl font-bold">
            Curious about me? Here you have it:
          </h3>
          <p className="mb-4">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="mb-4">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="mb-4">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="mb-4">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="mb-4">Finally, some quick bits about me.</p>
          <div className="flex gap-16">
            <div className="flex flex-col list-inside">
              <li>B.E. in Computer Engineering</li>
              <li className="mb-6">Full time freelancer</li>
            </div>
            <div className="flex flex-col list-inside">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </div>
          </div>

          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
