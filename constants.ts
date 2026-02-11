
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Tiago Rodrigues",
  title: "Desenvolvedor PHP/Laravel | VueJS",
  about: "Desenvolvedor apaixonado por criar soluções escaláveis e arquiteturas robustas. Com mais de 3 anos de experiência, foco em tecnologias consolidadas como PHP, Laravel, VueJS para resolver problemas reais de negócios.",
  email: "kage3f@gmail.com",
  phone: "+55 (17) 99728-2077",
  linkedin: "https://www.linkedin.com/in/tiago-rodrigues-dev/",
  github: "github.com/kage3f",
  experiences: [
    {
      company: "SGBR Sistemas",
      role: "Programador PHP Pleno",
      period: "2024 - 2026",
      description: [
        "Desenvolvimento e manutenção de sistemas em Laravel.",
        "Implementação de emissão de notas fiscais (NF-e/NFC-e) com integração à SEFAZ.",
        "Integração com APIs externas para pagamentos, serviços fiscais e validações.",
        "Manutenção e evolução de regras de negócio fiscais e financeiras."
      ]
    },
    {
      company: "WebGenium Systems",
      role: "Estágio em Desenvolvimento Web",
      period: "2023 - 2024",
      description: [
        "Desenvolvimento e manutenção de sites institucionais e sistemas em WordPress.",
        "Criação e customização de temas e plugins em PHP.",
        "Ajustes de layout e funcionalidades utilizando HTML, CSS e JavaScript.",
        "Correção de bugs e melhorias de performance em projetos existentes."
      ]
    }
  ],
  projects: [
    {
      title: "AI Object Detection PHP",
      description: "Desenvolvimento de uma ferramenta robusta para detecção de objetos em tempo real utilizando PHP. O projeto explora a integração de bibliotecas de visão computacional e processamento de imagem diretamente no servidor, permitindo identificar múltiplos objetos através de fluxos de vídeo ou imagens estáticas. É uma demonstração de como processamento de IA pode ser orquestrado em ambientes backend tradicionais, focando em automação de segurança e análise de dados visuais sem depender exclusivamente de ambientes de execução externos.",
      tags: ["PHP", "AI", "Computer Vision", "Machine Learning"],
      link: "https://github.com/kage3f/ai-object-detection-php",
      image: ""
    },
    {
      title: "Encurtador de Link PHP",
      description: "Um sistema de gerenciamento de URLs encurtadas construído para oferecer alta performance e controle total sobre o tráfego. O projeto lida com redirecionamentos 301/302 eficientes, sanitização de inputs para evitar injeções maliciosas e geração de estatísticas básicas de acesso. Desenvolvido com foco em código limpo e arquitetura simplificada, permitindo deploy rápido em qualquer servidor com suporte a PHP e MySQL, ideal para campanhas de marketing que exigem links limpos e rastreáveis.",
      tags: ["PHP", "MySQL", "Security", "Backend"],
      link: "https://github.com/kage3f/encurtador-de-link-php",
      image: ""
    },
    {
      title: "Laravel Discussion Forum",
      description: "Plataforma completa de fórum de discussões inspirada em grandes comunidades tecnológicas. Utiliza o framework Laravel para gerenciar uma arquitetura MVC complexa, incluindo sistemas de autenticação de múltiplos níveis, threads de discussão com respostas aninhadas (nested comments), suporte a Markdown, notificações em tempo real e perfis de usuário customizáveis. O foco do projeto foi aplicar princípios SOLID e Design Patterns para garantir que a base de código seja facilmente extensível e de fácil manutenção.",
      tags: ["Laravel", "PHP", "MVC", "PostgreSQL"],
      link: "https://github.com/kage3f/laravel-forum",
      image: ""
    }
  ],
  skills: [
    { name: "PHP / Laravel", level: 95 },
    { name: "Vuejs", level: 90 },
    { name: "MySQL / PostgreSQL", level: 88 },
    { name: "AI Integration", level: 75 }
  ],
  education: [
    {
      institution: "União de Faculdades Brasileira (UniBF)",
      degree: "Analise e Desenvolvimento de Sistemas",
      period: "2023 (Incompleto)"
    }
  ]
};
