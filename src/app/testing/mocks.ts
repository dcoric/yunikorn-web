/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Observable, of } from 'rxjs';
import { LoadRemoteModuleEsmOptions } from '@angular-architects/module-federation';
import { QueueInfo } from '@app/models/queue-info.model';
import { AppInfo } from '@app/models/app-info.model';
import { ClusterInfo } from '@app/models/cluster-info.model';
import { HistoryInfo } from '@app/models/history-info.model';
import { NodeInfo } from '@app/models/node-info.model';
import { NodeUtilizationsInfo } from '@app/models/node-utilization.model';
import { Partition } from '@app/models/partition-info.model';

export const noopFn = () => {};
export const nullFn = () => null;

export const MockModuleFederationService = {
  loadRemoteModule: (config: LoadRemoteModuleEsmOptions) => of({}),
};


  export class MockSchedulerService {
    fetchAppList(partitionName: string, queueName: string): Observable<AppInfo[]> {
      return of([
        new AppInfo('app1', 'Description 1', '...', '...', 1, 1, [], 1, 'RUNNING', []),
        new AppInfo('app2', 'Description 2', '...', '...', 2, 2, [], 2, 'FAILED', []),
      ]);
    }
  
    fetchClusterList(): Observable<ClusterInfo[]> {
      return of();
    }
  
    fetchPartitionList(): Observable<Partition[]> {
      return of();
    }
  
    fetchSchedulerQueues(partitionName: string): Observable<{ rootQueue: QueueInfo }> {
      const rootQueue = new QueueInfo();
      rootQueue.queueName = 'rootQueue';
      rootQueue.status = 'RUNNING';
      rootQueue.isLeaf = false;
      rootQueue.isManaged = true;
      rootQueue.partitionName = partitionName;
      rootQueue.children = []; // Add mock child queues as needed
  
      return of({ rootQueue });
    }
  
    fetchAppHistory(): Observable<HistoryInfo[]> {
      return of();
    }
  
    fetchContainerHistory(): Observable<HistoryInfo[]> {
      return of();
    }
  
    fetchNodeList(partitionName: string): Observable<NodeInfo[]> {
      return of();
    }
  
    fetchNodeUtilizationsInfo(): Observable<NodeUtilizationsInfo[]> {
      return of();
    }
  }

export const MockNgxSpinnerService = {
  show: noopFn,
  hide: noopFn,
};

export const MockEnvconfigService = {
  getSchedulerWebAddress: noopFn,
  getAllocationsDrawerComponentRemoteConfig: nullFn,
  getSchedulerServiceRemoteConfig: nullFn,
};

export const MockEventBusService = {
  getEvent: () => of<any>(),
  publish: noopFn,
};

export const MockSchedulerServiceLoader = {
  loadScheduler: () => of(MockSchedulerService),
  initializeSchedulerService(remoteConfig: any): Promise<MockSchedulerService> {
    return Promise.resolve(new MockSchedulerService());
  },
  fetchClusterByName: () => of({}),
  fetchClusterList: () => of([]),
  fetchPartitionList: () => of([]),
  fetchSchedulerQueues: () => of({}),
  fetchAppList: () => of([]),
  fetchAppHistory: () => of([]),
  fetchContainerHistory: () => of([]),
};

export const MockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => 'mockParam', // Provide whatever parameters you need here
    },
  },
};

export const MockRouter = {
  navigate: jasmine.createSpy('navigate'), // Mock navigate function
};