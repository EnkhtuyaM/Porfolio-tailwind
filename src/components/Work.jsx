import { work } from "../utils/work";
import { Button } from "./elements";
export const Work = () => {
  return (
    <div className="w-[1440px] h-[1848px] flex flex-col pl-6">
      <div className="flex justify-center mt-12">
        <Button buttName={"Work"} />
      </div>
      <div className="flex justify-between ">
        <h3 className="w-[1216px] h-[28px] ps-[530px] mt-6 mb-16">
          Some of the noteworthy projects I have built:
        </h3>
      </div>

      <div className="w-[1152px] h-[480px] flex gap-12 mb-12">
        <img className="w-[480px] h-[384px]" src="picture.png" alt="" />
        <div className="flex flex-col gap-8">
          <p>Fiskil</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="w-[480px] flex flex-wrap gap-4">
            {work.map((e) => {
              return <Button buttName={e} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-[1152px] h-[480px] flex gap-12 mb-12">
        <div className="flex flex-col gap-8">
          <p>Fiskil</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="w-[480px] flex flex-wrap gap-4">
            {work.map((e) => {
              return <Button buttName={e} />;
            })}
          </div>
        </div>
        <img className="w-[480px] h-[384px]" src="picture.png" alt="" />
      </div>
      <div className="w-[1152px] h-[480px] flex gap-12">
        <img className="w-[480px] h-[384px]" src="picture.png" alt="" />
        <div className="flex flex-col gap-8">
          <p>Fiskil</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="w-[480px] flex flex-wrap gap-4">
            {work.map((e) => {
              return <Button buttName={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
