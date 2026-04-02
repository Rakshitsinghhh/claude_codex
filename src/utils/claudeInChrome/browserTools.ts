/**
 * Tool entries for Claude in Chrome MCP. Mirrors `BROWSER_TOOLS` from
 * `@ant/claude-for-chrome-mcp` (internal package). Kept in sync with
 * `ChromeToolName` in toolRendering.tsx.
 */
export const BROWSER_TOOLS = [
  { name: 'javascript_tool' },
  { name: 'read_page' },
  { name: 'find' },
  { name: 'form_input' },
  { name: 'computer' },
  { name: 'navigate' },
  { name: 'resize_window' },
  { name: 'gif_creator' },
  { name: 'upload_image' },
  { name: 'get_page_text' },
  { name: 'tabs_context_mcp' },
  { name: 'tabs_create_mcp' },
  { name: 'update_plan' },
  { name: 'read_console_messages' },
  { name: 'read_network_requests' },
  { name: 'shortcuts_list' },
  { name: 'shortcuts_execute' },
] as const
