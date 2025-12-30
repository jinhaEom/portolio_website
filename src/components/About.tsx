import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { label: "NPE Crash 감소", value: "8% → 1%" },
    { label: "코드 축소", value: "90%" },
    { label: "MAU 성장", value: "+50%" },
    { label: "활성 사용자", value: "2,000+" },
  ];

  return (
    <section id="about" className="section-padding bg-surface" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-accent font-mono text-sm">01</span>
            <h2 className="text-2xl font-semibold">About</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                Android와 React Native로
                <br />
                <span className="text-subtle">
                  실서비스를 개발하고 있습니다.
                </span>
              </p>

              <p className="text-subtle leading-relaxed">
                앱 구조 리팩토링과 React Native 마이그레이션을 단독으로
                수행했으며, 성능 개선과 사용자 경험 향상에 집중하고 있습니다.
                빠르게 변화하는 시대에서 항상 겸손과 배움을 이어가며 성장하고
                있습니다.
              </p>
            </div>

            {/* Right - Highlights */}
            <div className="grid grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-accent/30 pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-semibold text-accent mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-subtle">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
