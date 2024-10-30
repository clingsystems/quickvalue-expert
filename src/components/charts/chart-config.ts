interface ChartTheme {
  gradientStart: string;
  gradientEnd: string;
  lineColor: string;
  gridColor: string;
}

export const chartThemes: Record<"light" | "dark", ChartTheme> = {
  light: {
    gradientStart: "#0066FF",
    gradientEnd: "#0066FF",
    lineColor: "#0066FF",
    gridColor: "#eee",
  },
  dark: {
    gradientStart: "#60A5FA",
    gradientEnd: "#60A5FA",
    lineColor: "#60A5FA",
    gridColor: "#374151",
  },
}

export const chartConfig = {
  height: 400,
  margin: { top: 10, right: 30, left: 0, bottom: 0 },
  tooltipStyle: {
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '6px'
  }
}