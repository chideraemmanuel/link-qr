import styles from "./Generator.module.scss";
import GeneratorOptions from "./components/generatorOptions/GeneratorOptions";
import GeneratorPreview from "./components/generatorPreview/GeneratorPreview";

const Generator: React.FC = () => {
  return (
    <section className={styles.generator}>
      <div className={styles.generator__panel}>
        <div className={styles.generator__panel_options}>
          <span>Options</span>
          <GeneratorOptions />
        </div>
        <div className={styles.generator__panel_preview}>
          <span>Preview</span>
          <GeneratorPreview />
        </div>
      </div>
    </section>
  );
};

export default Generator;
