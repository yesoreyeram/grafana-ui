<!-- markdownlint-configure-file {
  "MD024": false,
  "MD033": false
} -->

<h1 align="center">
  Grafana UI Experiments
</h1>

<p align="center">Grafana UI Experiments and components library</p>

<p align="center">
      <img src="https://grafana.com/media/docs/grafana-cloud/infrastructure/grafanalogo.svg" alt="Grafana UI Experiments" width="140">
</p>

## Components List

### Hello

A simple **Hello** component to display a greeting with an icon

#### Usage

```sh
npx shadcn@latest add http://yesoreyeram.github.io/grafana-ui/r/hello.json
```

#### Example

```tsx
<Hello message="Grafana UI experiments" />
```

### Special Hello

A simple **SpecialHello** component to display a greeting with a predefined icon. This component also depends on **Hello** component

#### Usage

```sh
npx shadcn@latest add http://yesoreyeram.github.io/grafana-ui/r/special-hello.json
```

#### Example

```tsx
<SpecialHello message="Grafana UI experiments" />
```

### Very Special Hello

A simple **VerySpecialHello** component to display a greeting in upper case with a predefined icon. This component depends on the third party library `upper-case`

#### Usage

```sh
npx shadcn@latest add http://yesoreyeram.github.io/grafana-ui/r/very-special-hello.json
```

#### Example

```tsx
<VerySpecialHello message="Grafana UI experiments" />
```

### Hello Grafana

A simple **HelloGrafana** component to display a greeting in upper case with a predefined icon in grafana modal component. This component depends on the grafana ui library `@grafana/ui` and the **VerySpecialHello** component.

#### Usage

```sh
npx shadcn@latest add http://yesoreyeram.github.io/grafana-ui/r/hello-grafana.json
```

#### Example

```tsx
<HelloGrafana />
```
