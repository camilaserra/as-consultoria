// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *banners → banners*
 */
export interface BannersDocumentDataBannersItem {
  /**
   * imagem field in *banners → banners*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banners.banners[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Título field in *banners → banners*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: banners.banners[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Subtitulo field in *banners → banners*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: banners.banners[].subtitulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo: prismic.KeyTextField;
}

/**
 * Content for banners documents
 */
interface BannersDocumentData {
  /**
   * banners field in *banners*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: banners.banners[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  banners: prismic.GroupField<Simplify<BannersDocumentDataBannersItem>>;
}

/**
 * banners document from Prismic
 *
 * - **API ID**: `banners`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BannersDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BannersDocumentData>,
    "banners",
    Lang
  >;

/**
 * Content for Contatos e Redes Sociais documents
 */
interface ContatosERedesSociaisDocumentData {
  /**
   * Logo Menu field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contatos_e_redes_sociais.logo_menu
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_menu: prismic.ImageField<never>;

  /**
   * Logo Footer field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contatos_e_redes_sociais.logo_footer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_footer: prismic.ImageField<never>;

  /**
   * Endereço field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex: Rua do seis, nº 6 ...
   * - **API ID Path**: contatos_e_redes_sociais.endereco
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  endereco: prismic.KeyTextField;

  /**
   * Email field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex: meuemail@gmail.com
   * - **API ID Path**: contatos_e_redes_sociais.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Telefone field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex: (91) 99999-9999
   * - **API ID Path**: contatos_e_redes_sociais.telefone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  telefone: prismic.KeyTextField;

  /**
   * Telefone link field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex: 91999999999 (números juntos sem espaços e/ou simbolos)
   * - **API ID Path**: contatos_e_redes_sociais.telefone_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  telefone_link: prismic.KeyTextField;

  /**
   * whatsapp field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex: (91) 99999-9999
   * - **API ID Path**: contatos_e_redes_sociais.whatsapp
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  whatsapp: prismic.KeyTextField;

  /**
   * Whatsapp link field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex: 91999999999 (números juntos sem espaços e/ou simbolos)
   * - **API ID Path**: contatos_e_redes_sociais.whatsapp_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  whatsapp_link: prismic.KeyTextField;

  /**
   * Linkedin field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Insira o link aqui!
   * - **API ID Path**: contatos_e_redes_sociais.linkedin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkedin: prismic.KeyTextField;

  /**
   * twitter field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Insira o link aqui!
   * - **API ID Path**: contatos_e_redes_sociais.twitter
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  twitter: prismic.KeyTextField;

  /**
   * Facebook field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Insira o link aqui!
   * - **API ID Path**: contatos_e_redes_sociais.facebook
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  facebook: prismic.KeyTextField;

  /**
   * Instagram field in *Contatos e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Insira o link aqui!
   * - **API ID Path**: contatos_e_redes_sociais.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  instagram: prismic.KeyTextField;
}

/**
 * Contatos e Redes Sociais document from Prismic
 *
 * - **API ID**: `contatos_e_redes_sociais`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContatosERedesSociaisDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContatosERedesSociaisDocumentData>,
    "contatos_e_redes_sociais",
    Lang
  >;

/**
 * Content for Cookies documents
 */
interface CookiesDocumentData {
  /**
   * Título field in *Cookies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: cookies.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Conteúdo field in *Cookies*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: cookies.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField;
}

/**
 * Cookies document from Prismic
 *
 * - **API ID**: `cookies`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CookiesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<CookiesDocumentData>,
    "cookies",
    Lang
  >;

/**
 * Content for Invista na Excelência documents
 */
interface InvistaNaExcelenciaDocumentData {
  /**
   * Título field in *Invista na Excelência*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: invista_na_excelencia.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Descrição field in *Invista na Excelência*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: invista_na_excelencia.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField;

  /**
   * Título whatsapp field in *Invista na Excelência*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: invista_na_excelencia.titulo_whatsapp
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_whatsapp: prismic.KeyTextField;

  /**
   * Título email field in *Invista na Excelência*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: invista_na_excelencia.titulo_email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_email: prismic.KeyTextField;
}

/**
 * Invista na Excelência document from Prismic
 *
 * - **API ID**: `invista_na_excelencia`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type InvistaNaExcelenciaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<InvistaNaExcelenciaDocumentData>,
    "invista_na_excelencia",
    Lang
  >;

/**
 * Item in *Missão, Visão e Valores → grupo de valores*
 */
export interface MissaoVisaoValoresDocumentDataGrupoDeValoresItem {
  /**
   * Título field in *Missão, Visão e Valores → grupo de valores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: missao_visao_valores.grupo_de_valores[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Descrição field in *Missão, Visão e Valores → grupo de valores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: missao_visao_valores.grupo_de_valores[].descricao
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField;
}

/**
 * Content for Missão, Visão e Valores documents
 */
interface MissaoVisaoValoresDocumentData {
  /**
   * Título missão field in *Missão, Visão e Valores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: missao_visao_valores.titulo_missao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_missao: prismic.KeyTextField;

  /**
   * Descrição misão field in *Missão, Visão e Valores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: missao_visao_valores.descricao_misao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_misao: prismic.KeyTextField;

  /**
   * Título visão field in *Missão, Visão e Valores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: missao_visao_valores.titulo_visao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_visao: prismic.KeyTextField;

  /**
   * Descrição visão field in *Missão, Visão e Valores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: missao_visao_valores.descricao_visao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_visao: prismic.KeyTextField;

  /**
   * Título valores field in *Missão, Visão e Valores*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: missao_visao_valores.titulo_valores
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_valores: prismic.KeyTextField;

  /**
   * grupo de valores field in *Missão, Visão e Valores*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: missao_visao_valores.grupo_de_valores[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  grupo_de_valores: prismic.GroupField<
    Simplify<MissaoVisaoValoresDocumentDataGrupoDeValoresItem>
  >;

  /**
   * Ilustração field in *Missão, Visão e Valores*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: missao_visao_valores.ilustracao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  ilustracao: prismic.ImageField<never>;
}

/**
 * Missão, Visão e Valores document from Prismic
 *
 * - **API ID**: `missao_visao_valores`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MissaoVisaoValoresDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MissaoVisaoValoresDocumentData>,
    "missao_visao_valores",
    Lang
  >;

/**
 * Content for Nossa Estrutura documents
 */
interface NossaEstruturaDocumentData {
  /**
   * Título field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Subtitulo field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.subtitulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo: prismic.KeyTextField;

  /**
   * Descrição field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField;

  /**
   * Icone card um field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_um
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_um: prismic.ImageField<never>;

  /**
   * Icone card um variável  field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_um_variavel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_um_variavel: prismic.ImageField<never>;

  /**
   * Título card um field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.titulo_card_um
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_card_um: prismic.KeyTextField;

  /**
   * Descrição card um field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.descricao_card_um
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_card_um: prismic.KeyTextField;

  /**
   * Icone card dois field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_dois
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_dois: prismic.ImageField<never>;

  /**
   * icone card dois variável field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_dois_variavel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_dois_variavel: prismic.ImageField<never>;

  /**
   * Título card dois field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.titulo_card_dois
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_card_dois: prismic.KeyTextField;

  /**
   * Descrição card dois field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.descricao_card_dois
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_card_dois: prismic.KeyTextField;

  /**
   * Icone card três field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_tres
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_tres: prismic.ImageField<never>;

  /**
   * Icone card três variável field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_tres_variavel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_tres_variavel: prismic.ImageField<never>;

  /**
   * Título card três field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.titulo_card_tres
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_card_tres: prismic.KeyTextField;

  /**
   * Descrição card três field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.descricao_card_tres
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_card_tres: prismic.KeyTextField;

  /**
   * Icone card quatro field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_quatro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_quatro: prismic.ImageField<never>;

  /**
   * Icone card quatro variável field in *Nossa Estrutura*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nossa_estrutura.icone_card_quatro_variavel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone_card_quatro_variavel: prismic.ImageField<never>;

  /**
   * Título card quatro field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.titulo_card_quatro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_card_quatro: prismic.KeyTextField;

  /**
   * Descrição card quatro field in *Nossa Estrutura*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: nossa_estrutura.descricao_card_quatro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_card_quatro: prismic.KeyTextField;
}

/**
 * Nossa Estrutura document from Prismic
 *
 * - **API ID**: `nossa_estrutura`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NossaEstruturaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NossaEstruturaDocumentData>,
    "nossa_estrutura",
    Lang
  >;

/**
 * Content for Porque Contratar  documents
 */
interface PorqueContratarDocumentData {
  /**
   * Título field in *Porque Contratar *
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Descrição field in *Porque Contratar *
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField;

  /**
   * Título item um field in *Porque Contratar *
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.titulo_item_um
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_item_um: prismic.KeyTextField;

  /**
   * Imagem item um field in *Porque Contratar *
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: porque_contratar.imagem_item_um
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem_item_um: prismic.ImageField<never>;

  /**
   * Descrição item um field in *Porque Contratar *
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.descricao_item_um
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao_item_um: prismic.RichTextField;

  /**
   * Título item dois field in *Porque Contratar *
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.titulo_item_dois
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_item_dois: prismic.KeyTextField;

  /**
   * Imagem item dois field in *Porque Contratar *
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: porque_contratar.imagem_item_dois
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem_item_dois: prismic.ImageField<never>;

  /**
   * Descrição item dois field in *Porque Contratar *
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.descricao_item_dois
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao_item_dois: prismic.RichTextField;

  /**
   * Título item três field in *Porque Contratar *
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.titulo_item_tres
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_item_tres: prismic.KeyTextField;

  /**
   * Imagem item três field in *Porque Contratar *
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: porque_contratar.imagem_item_tres
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem_item_tres: prismic.ImageField<never>;

  /**
   * Descrição item três field in *Porque Contratar *
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.descricao_item_tres
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao_item_tres: prismic.RichTextField;

  /**
   * Título item quatro field in *Porque Contratar *
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.titulo_item_quatro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_item_quatro: prismic.KeyTextField;

  /**
   * Imagem item quatro field in *Porque Contratar *
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: porque_contratar.imagem_item_quatro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem_item_quatro: prismic.ImageField<never>;

  /**
   * Descrição item quatro field in *Porque Contratar *
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: porque_contratar.descricao_item_quatro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao_item_quatro: prismic.RichTextField;
}

/**
 * Porque Contratar  document from Prismic
 *
 * - **API ID**: `porque_contratar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PorqueContratarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PorqueContratarDocumentData>,
    "porque_contratar",
    Lang
  >;

/**
 * Content for Quem somos documents
 */
interface QuemSomosDocumentData {
  /**
   * Título field in *Quem somos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: quem_somos.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Subtitulo field in *Quem somos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: quem_somos.subtitulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo: prismic.KeyTextField;

  /**
   * Conteudo esquerdo field in *Quem somos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: quem_somos.conteudo_esquerdo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo_esquerdo: prismic.RichTextField;

  /**
   * Imagem field in *Quem somos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quem_somos.imagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Conteudo direito field in *Quem somos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: quem_somos.conteudo_direito
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo_direito: prismic.RichTextField;
}

/**
 * Quem somos document from Prismic
 *
 * - **API ID**: `quem_somos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type QuemSomosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<QuemSomosDocumentData>,
    "quem_somos",
    Lang
  >;

/**
 * Content for Sobre a CEO documents
 */
interface SobreACeoDocumentData {
  /**
   * Imagem field in *Sobre a CEO*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_a_ceo.imagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Título field in *Sobre a CEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: sobre_a_ceo.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Descrição field in *Sobre a CEO*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Digite aqui!
   * - **API ID Path**: sobre_a_ceo.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao: prismic.RichTextField;
}

/**
 * Sobre a CEO document from Prismic
 *
 * - **API ID**: `sobre_a_ceo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SobreACeoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SobreACeoDocumentData>,
    "sobre_a_ceo",
    Lang
  >;

export type AllDocumentTypes =
  | BannersDocument
  | ContatosERedesSociaisDocument
  | CookiesDocument
  | InvistaNaExcelenciaDocument
  | MissaoVisaoValoresDocument
  | NossaEstruturaDocument
  | PorqueContratarDocument
  | QuemSomosDocument
  | SobreACeoDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BannersDocument,
      BannersDocumentData,
      BannersDocumentDataBannersItem,
      ContatosERedesSociaisDocument,
      ContatosERedesSociaisDocumentData,
      CookiesDocument,
      CookiesDocumentData,
      InvistaNaExcelenciaDocument,
      InvistaNaExcelenciaDocumentData,
      MissaoVisaoValoresDocument,
      MissaoVisaoValoresDocumentData,
      MissaoVisaoValoresDocumentDataGrupoDeValoresItem,
      NossaEstruturaDocument,
      NossaEstruturaDocumentData,
      PorqueContratarDocument,
      PorqueContratarDocumentData,
      QuemSomosDocument,
      QuemSomosDocumentData,
      SobreACeoDocument,
      SobreACeoDocumentData,
      AllDocumentTypes,
    };
  }
}
