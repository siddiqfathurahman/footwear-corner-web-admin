"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    console.log("Uploaded URL:", result.info.secure_url); // Debugging line
    onChange(result.info.secure_url); // Mengubah URL gambar
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image fill className="object-cover" alt="Image" src={url} />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="pd6ckpip">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <>
              <Button
                type="button"
                disabled={disabled}
                variant="secondary"
                onClick={onClick}
              >
                {value.length > 0 ? (
                  value[0]
                ) : (
                  <>
                    <ImagePlus className="h-4 w-4 mr-2" />
                    Upload Image
                  </>
                )}
              </Button>
              {value.length > 0 && (
                <input
                  type="text"
                  value={value[0]} // Menampilkan URL gambar yang diupload
                  readOnly
                  className="mt-2 w-full p-2 border rounded-md"
                  placeholder="Uploaded Image URL"
                />
              )}
            </>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
