import { ComponentTypographyActionLink } from "@/app/generated/graphql-types";
import P from "@/components/p/p";
import styles from "@/components/p/p.module.scss";
import Link from "next/link";

const ComponentTypographyAction_link = ({
  action_text,
  action_url,
}: ComponentTypographyActionLink) => {
  return (
    <P extraClass={styles.action_link}>
      <Link href={action_url}>
        {action_text}
      </Link>
    </P>
  );
};

export default ComponentTypographyAction_link;
