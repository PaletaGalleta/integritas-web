import {Helmet} from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
}

function SEO({title, description, keywords, ogImage = "/logo.svg", ogType = "website", canonicalUrl}: SEOProps) {
    const fullTitle = `${title} | Integritas - Servicios Profesionales`;
    const siteUrl = "https://integritasservicios.com";
    const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullCanonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:site_name" content="Integritas" />
            <meta property="og:locale" content="es_MX" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Spanish" />
            <meta name="author" content="Integritas" />
        </Helmet>
    );
}

export default SEO;
