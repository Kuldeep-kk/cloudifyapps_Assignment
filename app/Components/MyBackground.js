'use client';
import { motion } from 'framer-motion';

const MyBackground = ({ showSlider }) => {

    return (
        <motion.div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
            style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/e64b/5d51/202c7582fc54777bef345a3858aaf4d8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4799xxUK5xfgnQ1qwvkKKSixSNiVgPwSWNLSpsEENBXNjBvpS0sHMyBSJ0iMGFu1TipzjbWA3F6BPWlMzEMKkXkiKzL0egNhybb~J9X883BNWZW3IDKIfrgZjbKj8R~~dd0-rOMNl17kH9D-T3OECbLZj2V0zTFsXaMapixcsUY2Bn19pGBBsNJGZxc1Vo4CUgKUPehkFPKCFapmvYtl1BCiEjJSies3PXjxZR5KE52UgFweyZ2qQ3bPkH5BBAwgkTrHI5nPCqpmV7q6pIAcMToR4EO9-NPDBbA3e-3YrYVt3tk6emKGZP~vNdGLFSyavzWDxvdZz6oRckQdRMw~Q__')"}}
            animate={showSlider ? { scale:[1,1,1]} : { scale: [1, 1.12, 1] }}
            transition={showSlider ? {} : { duration: 10, ease: "easeInOut", repeat: Infinity }}
        >
            <div className={`absolute top-0 left-0 w-full h-full bg-black ${showSlider ? `opacity-65`:`opacity-50`}`}></div>
        </motion.div>
    );
};

export default MyBackground;
