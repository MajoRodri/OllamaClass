<div align="center">
  <img src="img/icon.png" alt="OllamaClass" width="120" />

# STARK OS 
### *Masterclass de IA Local · Privada · Sin Límites*

> *"No necesitas llamar a alguien más. Tienes a JARVIS en tu propio taller."*

**[Ver sitio en vivo](PONER LINK)**

</div>

---

## ¿Qué es esto?

**OllamaClass** es una masterclass interactiva y gratuita que te enseña a correr tu propia inteligencia artificial directamente en tu computadora, **sin internet, sin suscripciones y sin que nadie vea tus conversaciones**.

Imagínalo así: en lugar de usar ChatGPT (que está en servidores de otra empresa, en otro país, con acceso a todo lo que escribes), tú tienes a tu propio **JARVIS** corriendo en tu máquina. Solo tuyo. Siempre disponible. Completamente privado.

La herramienta que hace eso posible se llama **[Ollama](https://ollama.com)**, y esta masterclass te explica todo lo que necesitas saber para usarla, desde cero.

---

## Módulos

| # | Módulo | Tema | Nivel |
|---|--------|------|-------|
| 01 | ¿Qué es Ollama? | Cómo funciona la IA local por dentro | Principiante |
| 02 | Modelos de IA | Cuál elegir según tu computadora | Principiante |
| 03 | Interfaces | Cómo darle una cara visual a tu IA | Intermedio |
| 04 | RAG | Hazle preguntas a tus propios documentos | Avanzado |
| 05 | Instalación | Guía paso a paso para empezar hoy | Todos los niveles |
| 06 | Glosario | Los términos técnicos en lenguaje humano | Referencia |
| 07 | Recursos | Links, ética y solución de problemas | Referencia |
| - | Escape Room | Pon a prueba lo que aprendiste (10 salas) | Interactivo |

---

## ¿Cómo usarlo?

No necesitas instalar nada especial. Solo abre `index.html` en tu navegador.

```bash
# Opción 1 - Abrir directamente
Doble clic en index.html

# Opción 2 - Servidor local (si tienes Node.js)
npx serve .

# Opción 3 - VS Code con extensión Live Server
Clic derecho en index.html > "Open with Live Server"
```

---

## Detalle de cada módulo

<details>
<summary><strong>Módulo 01 - ¿Qué es Ollama?</strong></summary>

Explica, con la analogía de Tony Stark y JARVIS, cómo funciona Ollama por dentro. Sin necesidad de ser programador para entenderlo.

- Descarga el modelo una sola vez y lo comprime en formato GGUF
- Lo carga en la memoria RAM de tu PC y abre un canal de comunicación local
- **Puede:** resumir textos, programar, traducir, analizar imágenes (modelos Vision), RAG
- **No puede:** generar audio, navegar por internet (por defecto), generar imágenes

</details>

<details>
<summary><strong>Módulo 02 - Modelos de IA</strong></summary>

Guía práctica para elegir el modelo correcto según cuánta RAM tienes disponible.

| RAM disponible | Modelos recomendados | Parámetros |
|----------------|----------------------|------------|
| 8 GB | `phi3:mini`, `llama3.2:3b`, `gemma2:2b` | 1B - 3B |
| 16 GB | `llama3.1:8b`, `mistral:7b`, `deepseek-r1:8b` | 7B - 8B |
| 32 GB | `qwen2.5:14b`, `phi4:14b` | 14B - 32B |
| 64 GB+ | `llama3.3:70b`, `qwen2.5:72b` | 70B+ |

También explica la **cuantización**: cómo los modelos se comprimen para ocupar menos espacio sin perder demasiada calidad. Similar a JPEG vs RAW en fotografía.

</details>

<details>
<summary><strong>Módulo 03 - Interfaces Visuales</strong></summary>

Ollama por defecto solo tiene terminal. Este módulo te enseña a ponerle una interfaz visual como ChatGPT, 100% local.

| Herramienta | Tipo | Descripción |
|-------------|------|-------------|
| **Open WebUI** | App web | La más completa, via Docker |
| **Chatbox** | App escritorio | Detecta Ollama automáticamente, cero configuración |
| **Page Assist** | Extensión navegador | Siempre visible en la barra lateral |

También cubre los **Modelfiles**: cómo crear tu propio asistente con nombre, personalidad y comportamiento definidos por ti.

</details>

<details>
<summary><strong>Módulo 04 - RAG (Habla con tus documentos)</strong></summary>

RAG significa *Retrieval Augmented Generation*. En español: hacerle preguntas a tus propios archivos PDF, Word o texto sin que salgan de tu computadora.

El flujo completo:

```
Tu PDF → Fragmentos → Embeddings → ChromaDB → Tu pregunta → Respuesta
```

1. Cargas tu PDF y el sistema lo divide en fragmentos
2. Los convierte en coordenadas matemáticas (embeddings)
3. Los guarda en ChromaDB (base de datos vectorial local)
4. Al preguntar, encuentra los fragmentos relevantes y responde

**Dos caminos disponibles:**
- **Sin código:** Open WebUI o AnythingLLM (arrastrar y soltar archivos)
- **Con Python:** Script completo con LangChain + ChromaDB incluido en la masterclass

</details>

<details>
<summary><strong>Módulo 05 - Instalación (5 Fases)</strong></summary>

La guía más práctica del sitio. Lleva al usuario desde cero hasta tener su IA funcionando.

| Fase | Qué se hace |
|------|-------------|
| 01 | Descargar e instalar Ollama desde ollama.com |
| 02 | Correr el primer modelo desde la terminal |
| 03 | Conectar Chatbox como interfaz visual |
| 04 | Crear un modelo personalizado con Modelfile |
| 05 | Comandos esenciales para el día a día |

```powershell
ollama run llama3.2:3b                     # Descargar y correr un modelo
ollama list                                # Ver modelos descargados
ollama pull mistral:7b                     # Solo descargar, sin ejecutar
ollama create jarvis -f ./Modelfile.txt    # Crear modelo personalizado
```

</details>

<details>
<summary><strong>Módulo 06 - Glosario</strong></summary>

14 términos técnicos del mundo de la IA explicados en lenguaje cotidiano:

`LLM` · `Parámetros` · `Prompt` · `System Prompt` · `Token` · `Context Window` · `Temperature` · `Alucinación` · `VRAM` · `GGUF` · `Cuantización` · `RAG` · `Embedding` · `Modelfile`

</details>

<details>
<summary><strong>Módulo 07 - Recursos, Ética y Troubleshooting</strong></summary>

- **6 recursos externos** cuidadosamente seleccionados (videos y documentación oficial)
- **6 consideraciones éticas** honestas sobre los límites y riesgos de la IA local
- **6 problemas comunes** con sus soluciones

</details>

---

## El Escape Room STARK-9

Un juego de **10 salas** que verifica que realmente aprendiste antes de darte acceso a STARK OS. 2 intentos por sala; si fallas ambos, vuelves al inicio.

<details>
<summary><strong>Ver las 10 salas</strong></summary>

| Sala | Desafío | Tipo |
|------|---------|------|
| 01 | ¿Qué es Ollama? | Opción múltiple |
| 02 | ¿Qué significa "7B"? | Opción múltiple |
| 03 | Ordenar niveles de cuantización | Ordenar elementos |
| 04 | Escribir tu primer comando | Terminal interactiva |
| 05 | RAM necesaria para un modelo 7B | Opción múltiple |
| 06 | Conceptos: LLM, RAG, Embedding, Temperature | Emparejar |
| 07 | Descarga automática de modelos | Opción múltiple |
| 08 | Instrucción que define la personalidad en Modelfile | Opción múltiple |
| 09 | Reconstruir el orden de un Modelfile | Ordenar elementos |
| 10 | Comando completo para crear asistente custom | Terminal - desafío final |

</details>

---

## Estructura del proyecto

<details>
<summary><strong>Ver árbol de archivos</strong></summary>

```
OllamaClass/
│
├── index.html               # Página de inicio (hero + comparativa)
├── escape-room.html         # Juego interactivo de 10 salas
│
├── pages/
│   ├── que-es.html          # Módulo 01 - ¿Qué es Ollama?
│   ├── modelos.html         # Módulo 02 - Modelos y hardware
│   ├── interfaces.html      # Módulo 03 - Interfaces visuales
│   ├── rag.html             # Módulo 04 - RAG con documentos
│   ├── instalacion.html     # Módulo 05 - Instalación completa
│   ├── glosario.html        # Glosario técnico ilustrado
│   └── recursos.html        # Recursos, ética y troubleshooting
│
├── css/
│   ├── styles.css           # Estilos principales y del escape room
│   └── styles-info.css      # Estilos de las páginas de contenido
│
├── js/
│   ├── main.js              # Interactividad, animaciones, copiar código
│   └── i18n.js              # Sistema de traducción Español / Inglés
│
├── img/                     # Capturas de pantalla e íconos
└── docs/
    └── MasterclassOllama.pdf  # Versión PDF descargable
```

</details>

---

## Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| Estructura | HTML5 semántico |
| Estilos | CSS3 con variables, Flexbox y Grid |
| Lógica | JavaScript vanilla (ES6+) |
| Animaciones | Canvas 2D · Lottie Player |
| Iconos | Lucide Icons |
| Tipografías | Orbitron · Rajdhani · JetBrains Mono |
| Despliegue | GitHub Pages |

Sin frameworks. Sin dependencias pesadas. Solo web estándar que funciona en cualquier navegador moderno.

---

## Ética y limitaciones

<details>
<summary><strong>Ver consideraciones</strong></summary>

Esta masterclass no solo enseña a usar IA, también habla con claridad de sus riesgos.

- **Sesgos heredados** - Los modelos aprenden de internet y pueden reproducir prejuicios
- **Alucinaciones** - La IA puede inventar información falsa con total confianza
- **Privacidad relativa** - Correr localmente no garantiza privacidad absoluta
- **Barrera de hardware** - Se necesitan 8-16 GB de RAM mínimo
- **Sin moderación externa** - La responsabilidad recae completamente en el usuario
- **Conocimiento desactualizado** - Los modelos tienen fecha de corte y no navegan internet

</details>

---

## Autora

Creado por **Mariajose A.** como proyecto educativo para democratizar el acceso a la inteligencia artificial local.

El sitio está disponible en **Español e Inglés** con cambio de idioma en tiempo real sin recargar la página.

---

*"La IA no tiene que ser de otra empresa. Puede ser tuya."*
