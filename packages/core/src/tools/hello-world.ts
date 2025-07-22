/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTool, ToolResult, Icon } from './tools.js';
import { Type } from '@google/genai';

/**
 * Implementation of the HelloWorld tool logic
 */
export class HelloWorldTool extends BaseTool<object, ToolResult> {
  static readonly Name = 'hello_world';

  constructor() {
    super(
      HelloWorldTool.Name,
      'HelloWorld',
      'Returns the string "Hello world".',
      Icon.LightBulb, // Icon for the tool
      {
        type: Type.OBJECT,
        properties: {},
        required: [],
      },
    );
  }

  /**
   * Executes the HelloWorld operation
   * @param params Parameters for the HelloWorld operation (none)
   * @returns Result of the HelloWorld operation
   */
  async execute(
    params: object,
    _signal: AbortSignal,
  ): Promise<ToolResult> {
    return {
      llmContent: 'Hello world',
      returnDisplay: 'Hello world',
    };
  }
}
