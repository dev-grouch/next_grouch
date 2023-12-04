import { ComponentTypographyActionLink } from "@/app/generated/graphql-types";
import P from "@/components/p/p";
import styles from "@/components/p/p.module.scss";

const ComponentTypographyAction_link = ({
  action_text,
  action_url,
}: ComponentTypographyActionLink) => {
  return (
    <P extraClass={styles.action_link}>
      <a href={action_url}>
        {action_text}
      </a>
    </P>
  );
};

export default ComponentTypographyAction_link;
