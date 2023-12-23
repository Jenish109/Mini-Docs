import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoCloudDownloadOutline, IoScale } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{bounceStiffness:100, bounceDamping:30}}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full  left-0">
        <div className="flex items-center justify-between px-3 py-3 mb-5">
          <h5>{data.filezise}</h5>
          <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <IoCloudDownloadOutline size="0.8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 bg-green-600 flex item-center justify-center `}
          >
            <h3 className="text-sm semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default card;
