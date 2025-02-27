/*
 * Copyright 2022 The Yorkie Authors. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import { useAppSelector } from 'app/hooks';
import { selectProjectDetail } from './projectsSlice';

export function APIKeys() {
  const { project, status } = useAppSelector(selectProjectDetail);

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Failed!</div>}
      {status === 'idle' && (
        <form className="mt-6">
          <div className="mb-6">
            <label htmlFor="public-key-icon" className="block mb-2 font-medium">
              Public Key
            </label>
            <div className="relative">
              <input
                type="text"
                id="public-key-icon"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={project?.publicKey}
                readOnly
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="secret-key-icon" className="block mb-2 font-medium">
              Secret Key
            </label>
            <div className="relative">
              <input
                type="text"
                id="secret-key-icon"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={project?.secretKey}
                readOnly
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
