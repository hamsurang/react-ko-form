This document provides translation guidelines for React Hook Form documentation to ensure consistency when using Claude AI for translation tasks.

## Overview

React-Ko-Form maintains consistent Korean translations by following specific rules. When translating React Hook Form documentation, Claude should adhere to these guidelines to ensure uniformity across all translated content.

## Translation Rules

### 1. Standard Korean Translations

Translate the following terms consistently:

| English | Korean | Notes |
|---------|--------|-------|
| form | 폼 | |
| method | 메서드 | |
| submission | 제출 | Use English if "제출" sounds awkward in context |
| input | 인풋 or 입력 | Context-dependent; choose based on readability |
| error | 에러 | |
| send | 전달 | |
| submit | 전송 | |
| prop | 속성 | |
| rerendering | 리렌더링 | |

### 2. Bilingual Notation (Korean + English)

For technical terms that benefit from English clarification, use the format: `Korean(English)`

| English | Korean Notation |
|---------|----------------|
| register/registered | 등록(register) |
| blur | 블러(blur) |
| optional array | 의존성 배열(optional array) |
| flat field array | 평면 필드 배열(flat field array) |
| properties | 속성(properties) |
| props | 속성(props) |
| touched | 터치된(touched) |
| dirty | 변경된(dirty) |
| render phase | 렌더 단계(render phase) |
| export | 내보내기(export) |
| dependency array | 의존성 배열(dependency array) |

### 3. Keep in English

The following terms should remain in English as their Korean translations may lose technical precision:

- `flush`
- `import`
- `dispatch`

### 4. Section Titles

**Do NOT translate:**
- Main section headings like: `Props`, `Examples`, `Rules`, `TypeScript`, `API`, etc.

**DO translate:**
- Subtitles under these sections if they are descriptive phrases
- Example: Under "Examples", a subtitle "Reset Field State" should be translated to "필드 상태 초기화"

## Prompt Template for Claude

When asking Claude to translate documentation, use this template:

```
Please translate the following React Hook Form documentation to Korean following these guidelines:

1. Use the translation rules from claude.md in the repository
2. Maintain all code examples and technical syntax unchanged
3. Keep section headers (Props, Examples, Rules) in English
4. Translate descriptive subtitles under main sections
5. Use bilingual notation (Korean + English) for technical terms as specified
6. Ensure consistency with existing translations in the project

[Paste the content to translate here]
```

## Example Translation

**English:**
```
## Props

### name

The name of the input field. This prop is required and must be unique.

### rules

Validation rules for the register method. You can pass validation rules to register.
```

**Korean:**
```
## Props

### name

인풋 필드의 이름입니다. 이 속성(prop)은 필수이며 고유해야 합니다.

### rules

등록(register) 메서드를 위한 검증 규칙입니다. register에 검증 규칙을 전달할 수 있습니다.
```

## Additional Resources

For the complete and up-to-date translation rules, please refer to:
- [Translation Rules Wiki](https://github.com/hamsurang/react-ko-form/wiki/react%E2%80%90ko%E2%80%90form%EC%9D%98-%EB%B2%88%EC%97%AD-%EA%B7%9C%EC%B9%99)

## Notes for Contributors

- Always check existing translations for consistency
- When in doubt, refer to the wiki or ask maintainers
- Code examples should never be translated
- Maintain the original formatting and markdown structure
- Technical accuracy is paramount - if a Korean translation feels awkward or unclear, consider keeping the English term or using bilingual notation

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React-Ko-Form is an unofficial Korean translation project for the React Hook Form documentation (https://react-hook-form.com/docs). This is a Next.js website using Contentlayer for MDX content management.

## Development Commands

```bash
pnpm install          # Install dependencies
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run lint         # Run ESLint with auto-fix
pnpm run typecheck    # Run TypeScript type checking
pnpm run analyze      # Analyze bundle size (sets ANALYZE=true)
```

## Architecture

### Content Structure
- `src/content/` - MDX documentation files (Korean translations)
- `origin-src/content/` - Original English documentation for reference
- MDX files require frontmatter: `title`, `description`, and `sidebar` (enum: apiLinks, advancedLinks, tsLinks, faqLinks, getStartedLinks)

### Key Components
- `src/components/Menu/MenuLinks.ts` - Navigation sidebar links configuration
- `src/pages/` - Next.js pages (some docs rendered via TSX, others via Contentlayer)
- `contentlayer.config.ts` - MDX processing configuration with remark/rehype plugins

### Content Processing
Contentlayer processes MDX files from `src/content/` with:
- `remark-gfm` - GitHub Flavored Markdown
- `remark-custom-heading-id` - Custom heading IDs
- `remark-emoji` - Emoji support
- `rehype-mdx-code-props` - Code block properties

## Git Workflow

- **Default branch: `master-ko`** - The base branch for Korean translation work; all translation management happens here
- `master` branch: Reserved for syncing with official docs updates
- Create feature branches from `master-ko`
- Commit message format: `Docs: <page name> 번역` (e.g., `Docs: useForm 페이지 번역`)

## Translation Guidelines

### Standard Korean Translations
Translate the following terms consistently:

| English | Korean |
|---------|--------|
| form | 폼 |
| method | 메서드 |
| submission | 제출 |
| input | 인풋 or 입력 |
| error | 에러 |
| send | 전달 |
| submit | 전송 |
| prop | 속성 |
| rerendering | 리렌더링 |

### Bilingual Notation (Korean + English)

| English | Korean Notation |
|---------|----------------|
| register | 등록(register) |
| blur | 블러(blur) |
| touched | 터치된(touched) |
| dirty | 변경된(dirty) |
| render phase | 렌더 단계(render phase) |
| export | 내보내기(export) |
| dependency array | 의존성 배열(dependency array) |
| flat field array | 평면 필드 배열(flat field array) |
| properties | 속성(properties) |
| export | 내보내기(export) |


### Keep in English
- `flush`, `import`, `dispatch`

### Section Titles
- **Do NOT translate**: Main headings like `Props`, `Examples`, `Rules`, `TypeScript`, `API`
- **DO translate**: Descriptive subtitles under main sections

### Writing Style
- End sentences with "~다" (declarative form)
- For suggestions/recommendations, "~요" ending is acceptable
- Remove awkward translation artifacts
- Keep code examples unchanged
- Reference: https://github.com/hamsurang/react-ko-form/wiki/react%E2%80%90ko%E2%80%90form%EC%9D%98-%EB%B2%88%EC%97%AD-%EA%B7%9C%EC%B9%99
