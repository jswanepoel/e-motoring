﻿// Copyright © 2015, 2017, Oracle and/or its affiliates. All rights reserved.
//
// MySQL Connector/NET is licensed under the terms of the GPLv2
// <http://www.gnu.org/licenses/old-licenses/gpl-2.0.html>, like most 
// MySQL Connectors. There are special exceptions to the terms and 
// conditions of the GPLv2 as it is applied to this software, see the 
// FLOSS License Exception
// <http://www.mysql.com/about/legal/licensing/foss-exception.html>.
//
// This program is free software; you can redistribute it and/or modify 
// it under the terms of the GNU General Public License as published 
// by the Free Software Foundation; version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but 
// WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
// or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License 
// for more details.
//
// You should have received a copy of the GNU General Public License along 
// with this program; if not, write to the Free Software Foundation, Inc., 
// 51 Franklin St, Fifth Floor, Boston, MA 02110-1301  USA

using System.Collections.Generic;
using MySqlX.XDevAPI.Common;
using System.Linq;
using System;

namespace MySqlX.XDevAPI.CRUD
{
  /// <summary>
  /// Represents a chaining collection insert statement.
  /// </summary>
  public class AddStatement : CrudStatement<Result>
  {
    private List<DbDoc> _DbDocs = new List<DbDoc>();
    internal bool upsert;

    internal AddStatement(Collection collection) : base(collection)
    {
    }

    /// <summary>
    /// Adds documents to the collection.
    /// </summary>
    /// <param name="items">The documents to add.</param>
    /// <returns>This <see cref="AddStatement"/> object.</returns>
    /// <exception cref="ArgumentNullException">The <paramref name="items"/> array is null.</exception>
    public AddStatement Add(params object[] items)
    {
      if (items == null)
        throw new ArgumentNullException();

      _DbDocs.AddRange(GetDocs(items));
      return this;
    }

    /// <summary>
    /// Executes the Add statement.
    /// </summary>
    /// <returns>A <see cref="Result"/> object containing the results of the execution.</returns>
    public override Result Execute()
    {
      try
      {
        if (_DbDocs.Count == 0)
          return new Result(null);

        List<string> newIds = AssignIds();
        return Target.Session.XSession.Insert(Target, _DbDocs.ToArray(), newIds, upsert);
      }
      finally
      {
        _DbDocs.Clear();
      }
    }

    private List<string> AssignIds()
    {
      List<string> newIds = new List<string>();
      foreach (DbDoc doc in _DbDocs)
      {
        doc.EnsureId();
        newIds.Add(doc.Id.ToString());
      }

      return newIds;
    }
  }
}
