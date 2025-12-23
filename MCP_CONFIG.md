# MCP Server Configuration

To add the Next.js devtools MCP server, add this configuration to your Cursor/IDE MCP settings:

```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

This will enable Next.js development tools through the MCP interface.

