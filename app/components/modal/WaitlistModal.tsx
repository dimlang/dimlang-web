import {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import ModalWrapper from "./ModalWrapper";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface WaitlistModalProps {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

const WaitlistModal: FunctionComponent<WaitlistModalProps> = ({
  visibility,
  setVisibility,
}): ReactElement => {
  const pathname = usePathname();

  const [preferredContentType, setPreferredContentType] =
    useState("Select category");
  const [preferredPlatform, setPreferredPlatform] = useState("Select platform");
  const [preferredEditMode, setPreferredEditMode] = useState(
    "Select preferred mode of edit"
  );

  // Create the callback URL by encoding the current path
  //   const callbackUrl = encodeURIComponent(pathname);

  return (
    <ModalWrapper
      visibility={visibility}
      setVisibility={setVisibility}
      styles={{
        backgroundColor: "transparent",
        color: "#fff",
        width: "fit-content",
      }}
    >
      <div className="w-full sm:w-[25rem] p-6 rounded-[20px] glass-effect">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center">
            <h3 className="mb-1 text-xl font-medium">Unlock Early Access</h3>
            <p className="text-grey text-[0.8rem] font-normal opacity-80 text-center">
              We're rolling out something special. Be among the first to try it.
            </p>
          </div>
          {/* <span
            className="ml-auto size-8 rounded-full grid place-items-center cursor-pointer hover:bg-white/10 [&_svg_path]:stroke-[#fff] [&_svg_path]:fill-[#fff]"
            onClick={() => setVisibility(false)}
          >
            <Icons.Close />
          </span> */}
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <Input
            placeholder="Full name"
            className="bg-white border-none"
            // value={}
            onChange={(e) => {}}
          />
          <Input
            placeholder="Email"
            className="bg-white border-none"
            // value={}
            onChange={(e) => {}}
          />

          <div>
            <label htmlFor="contentType" className="text-sm mb-1">
              What type of content do you create?
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Input
                  className="text-left"
                  value={preferredContentType ?? "Select"}
                  onChange={(e) => {}}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>Select type</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                {["Short videos", "Podcasts", "Blog posts", "Tutorials"].map(
                  (option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setPreferredContentType(option)}
                    >
                      {option}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <label htmlFor="contentPublisher" className="text-sm mb-1">
              Where do you usually publish your content?
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Input
                  className="text-left"
                  value={preferredPlatform ?? "Select"}
                  onChange={(e) => {}}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>Select type</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                {["YouTube", "TikTok", "Instagram", "Substack", "Spotify"].map(
                  (option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setPreferredPlatform(option)}
                    >
                      {option}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <label htmlFor="preferredEditMode" className="text-sm mb-1">
              Do you currently edit your audio or video manually?
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Input
                  className="text-left"
                  value={preferredEditMode ?? "Select"}
                  onChange={(e) => {}}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>Select type</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                {["Yes", "No", "Sometimes"].map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setPreferredEditMode(option)}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col justify-end mt-4 gap-0">
          <button
            onClick={() => setVisibility(false)}
            className="bg-primary hover:bg-primary-sub text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 text-sm w-full mt-2"
          >
            Join the Waitlist
          </button>
          <button
            onClick={() => setVisibility(false)}
            className="bg-white/10 hover:bg-white/5 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 text-sm w-full mt-2"
          >
            Close
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WaitlistModal;
