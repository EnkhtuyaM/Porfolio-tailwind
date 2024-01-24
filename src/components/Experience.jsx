import { Button } from "./elements";

export const Experience = () => {
  return (
    <div className="w-[1440px] h-[1140px] flex flex-col bg-gray-50 m-auto py-1">
      <div className="flex justify-center mt-12">
        <Button buttName={"Experince"} />
      </div>
      <div className="flex justify-between ">
        <h3 className="w-[1216px] h-[28px] ps-[530px] mt-3 mb-12">
          Here is a quick summary of my most recent experiences:
        </h3>
      </div>
      <div className="w-[1280px] h-[1040px] bg-gray-50 flex flex-col gap-12 px-[192px]">
        <div className="w-[1050px] h-[288px] flex gap-[48px] pl-3 py-8 ml-[32px] bg-white shadow-md">
          <div className="w-[102px] h-[28px]">
            <img src="./logo-upwork.png" alt="" />
          </div>
          <div className="w-[384px] h-[28px] pl-14 ml-24">
            <p className="font-bold">Sr. Frontend Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Ut pretium arcu et massa semper, id fringilla leo semper.</p>
            <p>Sed quis justo ac magna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <p className="w-[146px] h-[24px]">Nov 2021 - Present</p>
          </div>
        </div>
        <div className="w-[1050px] h-[288px] flex gap-[48px] py-8 pl-3 ml-[32px] bg-white shadow-md">
          <div className="w-[102px] h-[28px]">
            <img src="./logo-upwork.png" alt="" />
          </div>
          <div className="w-[384px] h-[28px] pl-14 ml-24">
            <p className="font-bold">Team Lead</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Ut pretium arcu et massa semper, id fringilla leo semper.</p>
            <p>Sed quis justo ac magna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <p className="w-[146px] h-[24px]">Jul 2017 - Oct 2021</p>
          </div>
        </div>
        <div className="w-[1050px] h-[188px] flex gap-[48px] pl-3 py-8 ml-[32px] bg-white shadow-md">
          <div className="w-[102px] h-[28px]">
            <img src="./logo-upwork.png" alt="" />
          </div>
          <div className="w-[384px] h-[28px] pl-14 ml-24">
            <p className="font-bold">Full Stack Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="w-[146px] h-[24px]">Nov 2021 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};
