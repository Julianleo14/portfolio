import cardStyles from "@/app/styles/card.module.css";
import React, {ReactNode} from "react";
import Link from "next/link";

interface CardProps {
    title: string;
    description?: string;
    backgroundColor?: string;
    content?: {
        [key: string]: {
            icon: ReactNode;
            info: string;
            details?: string;
            url: string;
        };
    };
    cardType: string;
}

/* Valida si el link es válido */
const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

const CardInfo: React.FC<CardProps> = ({
                                           title,
                                           description,
                                           backgroundColor,
                                           content,
                                           cardType,

                                       }) => {
    const hasDetails = content && Object.values(content).some((item) => item.details);

    if (hasDetails) {
        return (
            <div
                className={cardStyles.cardContainerWithDetails}
                style={{
                    background:
                        backgroundColor === "dark"
                            ? "linear-gradient(to bottom right, #0C1015, #11222F, #1A2B37)"
                            : "linear-gradient(to bottom right, #11222F, #264857, #3F7A86)",
                }}
            >
                <div className={cardStyles.cardContentWithDetails}>
                    <h2 className={cardStyles.title}>{title}</h2>

                    {content && (
                        <ul className={cardStyles.listWithDetails}>
                            {Object.entries(content).map(([key, item]) => (
                                item.info == "Car Rental" ? (<li key={key} className={cardStyles.listItemWithDetails}>
                                    <section className={cardStyles.listItemWithDetailsTitle}>
                                        <div className={cardStyles.listItem}>
                                            <span className={cardStyles.span}>{item.icon}</span>
                                            {isValidUrl(item.url) ? (
                                                <Link
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="oreferrer"
                                                    className={cardStyles.link}
                                                >
                                                    {item.info} ↗
                                                </Link>
                                            ) : (
                                                <p>{item.info}</p>
                                            )}

                                        </div>
                                    </section>
                                    <div className={cardStyles.details}>
                                        {item.details}
                                    </div>
                                </li>) : (
                                    <li key={key} className={cardStyles.listItemWithDetails}>
                                        <section className={cardStyles.listItemWithDetailsTitle}>
                                            <span className={cardStyles.span}>{item.icon}</span>
                                            <p>{item.info}</p>
                                        </section>
                                        <div className={cardStyles.details}>
                                            {item.details}
                                        </div>
                                    </li>
                                )
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    }

    // Renderiza el diseño por defecto
    return (
        <div
            className={
                cardType === "small"
                    ? cardStyles.cardContainerSmall
                    : cardStyles.cardContainerLarge
            }
            style={{
                background:
                    backgroundColor === "dark"
                        ? "linear-gradient(to bottom right, #0C1015, #11222F, #1A2B37)"
                        : "linear-gradient(to bottom right, #11222F, #264857, #3F7A86)",
            }}
        >
            <div
                className={
                    cardType === "small"
                        ? cardStyles.cardContentSmall
                        : cardStyles.cardContentLarge
                }
            >
                <h2 className={cardStyles.title}>{title}</h2>
                {description && <p>{description}</p>}
                {content && (
                    <ul
                        className={
                            cardType === "small"
                                ? cardStyles.list
                                : cardStyles.listLarge
                        }
                    >
                        {Object.entries(content).map(([key, item]) => (
                            <li
                                key={key}
                                className={
                                    cardType === "small"
                                        ? cardStyles.listItem
                                        : cardStyles.listLargeItem
                                }
                            >
                                <span>{item.icon}</span>
                                {isValidUrl(item.info) ? (
                                    <Link
                                        href={item.info}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cardStyles.link}
                                    >
                                        {key} ↗
                                    </Link>
                                ) : (
                                    <p>{item.info}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CardInfo;
