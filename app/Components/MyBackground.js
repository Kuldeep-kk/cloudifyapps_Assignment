'use client';
import { motion } from 'framer-motion';

const MyBackground = ({ showSlider }) => {

    return (
        <motion.div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
            style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/e64b/5d51/202c7582fc54777bef345a3858aaf4d8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhPuEKLbNUYtDMkra3A-fOAp8VINi5dfmP7ekHLiRG4bd2MWOkdswkcU6bY3t69Clffd3~YhjjH~c0NjMic~iE-282NYIOvQ0EsmP7A7EUBnwzdFli~EjHTHEIx0UD2KQtCZHcYtbzUVkyeZbA8~q7cGYNaMGJXD8sug~AORVlIcY~mtSOjQ278prpYRIRv3X9p4AS6M5j72DnGx0YMz8mKdabCHfdNAzxX0-36L~kiaYsUwxgSXkFpd3Zy~illXLuWJIE~IIvz8vZRcyHQLNYhswUz3xPUo8oKldx8N69ZNVYiwrPKQLa~TOkEj9Wcj4xe4d~ZiBrvys9xsqK2iSg__')"}}
            animate={showSlider ? { scale:[1,1,1]} : { scale: [1, 1.12, 1] }}
            transition={showSlider ? {} : { duration: 10, ease: "easeInOut", repeat: Infinity }}
        >
            <div className={`absolute top-0 left-0 w-full h-full bg-black ${showSlider ? `opacity-65`:`opacity-50`}`}></div>
        </motion.div>
    );
};

export default MyBackground;
